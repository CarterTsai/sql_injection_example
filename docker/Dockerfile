FROM postgres:9.5.1

MAINTAINER Carter Tsai

RUN localedef -i zh_TW  -c -f UTF-8 -A /usr/share/locale/locale.alias zh_TW.UTF-8
ENV LANG zh_TW.UTF-8

ENTRYPOINT ["/docker-entrypoint.sh"]

EXPOSE 5432
CMD ["postgres"]
