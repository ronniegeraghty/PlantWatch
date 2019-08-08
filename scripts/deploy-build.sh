#!/bin/sh
echo "Moving build to deploy folder (docs)."

srcdir="../build"
dstdir="../docs"

cp -a ${srcdir}/. ${dstdir}/