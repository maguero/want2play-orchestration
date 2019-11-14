# Want2Play Orchestration

This is just a the docker-compose file with the configurations to build and run the entire Want2Play app.

### Services

* [want2play-discovery](https://github.com/maguero/want2play-discovery)
* [want2play-gateway](https://github.com/maguero/want2play-gateway), that depends on want2play-discovery
* [want2play](https://github.com/maguero/want2play), that depends on want2play-discovery and want2play-gateway