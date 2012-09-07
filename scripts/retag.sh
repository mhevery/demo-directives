#!/bin/sh

git tag | grep step | xargs git tag -d

for sha in `git log '--format=%H %s' | grep step- | cut -d ' ' -f 1`; do
  tag=`git log $sha...$sha~1 '--format=%H %s' | cut -d ' ' -f 2`
  echo Creating tag $tag for $sha
  git tag $tag $sha
done
