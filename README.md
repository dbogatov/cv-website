# CV Website

## How add to swarm

Make sure the overlay network is created

Deploy the service

```
docker service create \
	--name cv-website \
	--constraint 'node.role == worker' \
	--network internal-network \
	registry.dbogatov.org/dbogatov/cv-website:latest
```

