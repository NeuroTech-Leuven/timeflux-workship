#!/usr/bin/bash
if [[ $DATA_SOURCE == "lsl" ]]; then
	explorepy push2lsl -n $MENTALAB_NAME &
fi
timeflux -d brainbrowsr.yml
