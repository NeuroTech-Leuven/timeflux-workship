FROM ubuntu:22.04
RUN set -xe \
    && apt-get update -y \
    && apt-get install wget python3-pip libpugixml1v5 libbluetooth-dev graphviz -y bluetooth \
    && wget https://github.com/sccn/liblsl/releases/download/v1.16.2/liblsl-1.16.2-jammy_amd64.deb \
    && dpkg -i liblsl-1.16.2-jammy_amd64.deb \
    && apt-get remove wget -y \
    && apt autoremove -y
WORKDIR /project
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt
COPY ./brainbrowsr .
RUN chmod +x run.sh
RUN ln -s /usr/bin/python3 /usr/bin/python
CMD ./run.sh
