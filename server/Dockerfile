FROM alpine:latest

ARG PB_VERSION=0.29.3
ARG TARGETARCH

RUN apk add --no-cache \
    unzip \
    ca-certificates \
    wget

WORKDIR /pb

RUN if [ "$TARGETARCH" = "arm64" ]; then \
        ARCH="arm64"; \
    else \
        ARCH="amd64"; \
    fi && \
    wget https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_${ARCH}.zip -O /tmp/pocketbase.zip && \
    unzip /tmp/pocketbase.zip -d /pb/ && \
    chmod +x /pb/pocketbase && \
    rm /tmp/pocketbase.zip

COPY ./pb_hooks /pb/pb_hooks
COPY ./pb_migrations /pb/pb_migrations

EXPOSE 8090

CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8090"]
