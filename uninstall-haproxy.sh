#!/bin/bash

# Exit on any error
set -e

echo "Starting HAProxy Ingress Controller Uninstallation..."

# Uninstall HAProxy using Helm
echo "Uninstalling HAProxy Ingress Controller..."
helm uninstall haproxy-ingress -n haproxy-ingress

# Delete the namespace
echo "Deleting haproxy-ingress namespace..."
kubectl delete namespace haproxy-ingress

echo "HAProxy Ingress Controller uninstallation completed!"