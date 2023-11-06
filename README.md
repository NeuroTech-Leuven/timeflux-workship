# Timeflux workshop

An interactive workshop about Timeflux, a free and open-source framework
for the acquisition and real-time processing of biosignals.

## Installation

## Usage
```
podman run --net=host -e DATA_SOURCE=simulated -p 8000:8000 -p 8001:8001 --privileged -it localhost/timeflux-workshop:latest
```


```
podman run --net=host -e DATA_SOURCE=lsl -e MENTALAB_NAME=Explore_8559 -p 8000:8000 -p 8001:8001 --privileged -it localhost/timeflux-workshop:latest
```




## Useful resources

-   [Timeflux talk](https://www.youtube.com/watch?v=lNUXqOWYjUs)
-   [The timeflux
    documentation](https://timeflux.io/assets/pdf/Timeflux_GBCIC2019.pdf)
-   [The timeflux
    whitepaper](https://timeflux.io/assets/pdf/Timeflux_GBCIC2019.pdf)
-   [Timeflux BCI](https://github.com/timeflux/timeflux_bci)
    implementations of the classical BCI paradigms:

## To run the BrainBrowsR example

Launch the Google Chrome/Chromium web browser with the following
command-line options
`chromium-browser --disable-web-security --disable-features=IsolateOrigins,site-per-process --disable-site-isolation-trials --user-data-dir=<TEMP_DATA_DIR>`
to allow controlling the Facebook iframe from whithin our JS app.
