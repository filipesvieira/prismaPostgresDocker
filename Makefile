.PHONY: *

help:
	@printf "\033[33mComo usar:\033[0m\n  make [comando] [arg=\"valor\"...]\n\n\033[33mComandos:\033[0m\n"
	@grep -E '^[-a-zA-Z0-9_\.\/]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[32m%-30s\033[0m %s\n", $$1, $$2}'

up: ## Inicia os containers
	# code .
	docker-compose up -d --force-recreate
	docker-compose up --build
	# docker exec -it dockerprisma bash
	# sudo apt-get install -y libgbm-dev

down: ## Reinicia todos os containers
	docker-compose down
	docker system prune --force
	docker image prune --force
	docker volume prune --force
	make up