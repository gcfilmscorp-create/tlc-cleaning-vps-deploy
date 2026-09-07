# TLC Cleaning Co. — VPS deployment artifact

This repository contains only the compiled production artifact and the Docker
configuration used by Hostinger Docker Manager. The Lovable source project and
all environment files remain outside this repository.

Temporary preview: https://tlc-cleaning.46.202.178.171.nip.io

The container is stateless, runs as a non-root user, uses a read-only root
filesystem, and joins the VPS's existing external `gcfilms_edge` Traefik
network. No database is required by the current website build.
