#!/usr/bin/env sh

bundle exec middleman build
surge -d [name]-landing-page.surge.sh -p build
