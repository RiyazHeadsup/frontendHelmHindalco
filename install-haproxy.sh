#!/bin/bash

# Exit on any error
set -e

echo "Starting HAProxy Ingress Controller Installation..."

# Add HAProxy repository
echo "Adding HAProxy Helm repository..."
helm repo add haproxy-ingress https://haproxy-ingress.github.io/charts
helm repo update

# Create namespace
echo "Creating haproxy-ingress namespace..."
kubectl create namespace haproxy-ingress 2>/dev/null || true

# Install HAProxy Ingress
echo "Installing HAProxy Ingress Controller..."
helm install haproxy-ingress haproxy-ingress/haproxy-ingress \
  --namespace haproxy-ingress \
  --set controller.kind=DaemonSet \
  --set controller.service.type=LoadBalancer \
  --set controller.logging.level=info \
  --set "controller.config.ssl-redirect=\"false\"" \
  --set controller.resources.requests.cpu=100m \
  --set controller.resources.requests.memory=128Mi \
  --set controller.resources.limits.cpu=500m \
  --set controller.resources.limits.memory=512Mi

# Wait for pods to be ready
echo "Waiting for HAProxy pods to be ready..."
kubectl wait --namespace haproxy-ingress \
  --for=condition=ready pod \
  --selector=app.kubernetes.io/name=haproxy-ingress \
  --timeout=90s

# Verify installation
echo "Verifying installation..."
kubectl get all -n haproxy-ingress

echo "HAProxy Ingress Controller installation completed!"
echo "You can now enable ingress in your values.yaml by setting ingress.enabled: true"