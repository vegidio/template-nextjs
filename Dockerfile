### Build image ###
FROM node:alpine AS BUILD_IMAGE

# Install dependencies
RUN apk add curl

# Copy & build
COPY . /var/build
WORKDIR /var/build
RUN yarn
RUN yarn build

# Node Prune
RUN curl -sf https://gobinaries.com/tj/node-prune | sh
WORKDIR /var/build/.next/standalone
RUN node-prune

### Main Image ###
FROM node:alpine
LABEL maintainer="Vinicius Egidio <me@vinicius.io>"

# Define environment variables
ARG VERSION
ENV IMAGE_VERSION=$VERSION
ENV NODE_ENV=production

# Copy build files
COPY --from=BUILD_IMAGE /var/build/.next/standalone /var/www
COPY --from=BUILD_IMAGE /var/build/.next/static /var/www/.next/static
WORKDIR /var/www

EXPOSE 3000

# Start Next.js
CMD ["node", "server.js"]