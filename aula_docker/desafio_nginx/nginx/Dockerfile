FROM nginx:1.15.0-alpine

#Deletando o arquivo de configuração default do nginx ja que vamos utilizar a nossa
RUN rm /etc/nginx/conf.d/default.conf

#Copiando o arquivo de conf que criamos para a pasta
COPY nginx.conf /etc/nginx/conf.d
