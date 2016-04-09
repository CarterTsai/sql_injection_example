### Prepared Environment

-	docker-compose 1.6.2
-	docker 1.10.3
-	docker-machine 0.6.0

### RUN PostgresSql

```
    $> cd docker
    $> docker-compose up -d
```

```
$> docker run -it --link test_db --net bridge --rm cartertsai/postgres:9.5.1 sh -c 'exec psql -h "$TEST_DB_PORT_5432_TCP_ADDR" -p "$TEST_DB_PORT_5432_TCP_PORT" -U postgres'
```

-	check container network

```
    $> docker inspect --format='{{json .NetworkSettings.Networks}}' d66 | python -m json.tool
```

P.S. d66 is container id

### Run Server

```
    $> cd app
    $> npm start
```

### RUN Sqlmap

```
    $> cd sql_injection_tool
    $> python sqlmap.py --wizard
```
