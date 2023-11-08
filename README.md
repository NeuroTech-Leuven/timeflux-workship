# Timeflux workshop

An interactive workshop about Timeflux, a free and open-source framework
for the acquisition and real-time processing of biosignals.

## Installation

Make sure you have [docker](https://docs.docker.com/engine/install/) (or [podman](https://podman.io/docs/installation)) installed.

## Usage

### To run timeflux

Running timeflux with simulated data:
```sh
docker run --net=host -e DATA_SOURCE=simulated --publish-all --privileged -it localhost/timeflux-workshop:latest
```

Running an LSL server connected to the Mentalab headset and running timeflux
```
podman run --net=host -e DATA_SOURCE=lsl -e MENTALAB_NAME=<MENTALAB_NAME> --publish-all --privileged -it localhost/timeflux-workshop:latest
```

### To open the BrainBrowsR example

Launch the Google Chrome/Chromium web browser with the following
command-line options
```
chromium-browser --disable-web-security --disable-features=IsolateOrigins,site-per-process --disable-site-isolation-trials --user-data-dir=<TEMP_DATA_DIR>
```
to allow controlling the Facebook iframe from whithin our JS app.

The BrainBrowsr interface can be found at http://localhost:8000/brainbrowsr/,
The monitoring example at http://localhost:8001/monitor/

## Useful resources

-   [Timeflux talk](https://www.youtube.com/watch?v=lNUXqOWYjUs)
-   [The timeflux
    documentation](https://timeflux.io/assets/pdf/Timeflux_GBCIC2019.pdf)
-   [The timeflux
    whitepaper](https://timeflux.io/assets/pdf/Timeflux_GBCIC2019.pdf)
-   [Timeflux BCI](https://github.com/timeflux/timeflux_bci)
    implementations of the classical BCI paradigms:
- [Labstreaming layer](https://labstreaminglayer.org/#/)
