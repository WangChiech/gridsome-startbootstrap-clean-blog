# gridsome-startbootstrap-clean-blog



基于 startbootstrap-clean-blog 的 gridsome 练习

## 资料链接

**gridsome**   https://gridsome.org/docs/

**startbootstrap-clean-blog**     https://github.com/StartBootstrap/startbootstrap-clean-blog

**strapi 部署服务**    http://101.35.2.170:1337/admin

https://gitee.com/lagoufed/fed-e-questions/blob/master/part3/part3-4/01-%E5%AE%89%E8%A3%85strapi%E5%92%8Cmysql.md#%E5%9B%9B%E5%AE%89%E8%A3%85-strapi--mysql

`docker-compose.yaml`

```yaml
version: '3'
services:
  strapi:
    image: strapi/strapi:3.6.8-node14-alpine
    environment:
      DATABASE_CLIENT: mysql
      DATABASE_HOST: mysql
      DATABASE_PORT: 3306
      DATABASE_NAME: strapi
      DATABASE_USERNAME: strapi
      DATABASE_PASSWORD: strapi
      DATABASE_SSL: 'false'
    volumes:
      - ./app:/srv/app
    ports:
      - '1337:1337'
    depends_on:
      - mysql

  mysql:
    image: mysql:5.6
    command: mysqld --default-authentication-plugin=mysql_native_password --character-set-server=utf8 --collation-server=utf8_unicode_ci
    volumes:
      - ./data:/var/lib/mysql
    environment:
      MYSQL_ROOT_PASSWORD: strapi
      MYSQL_DATABASE: strapi
      MYSQL_USER: strapi
      MYSQL_PASSWORD: strapi
```

