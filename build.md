npm run build -- --base-href=/cv/
rm -rf docs
mkdir -p docs
mv dist/cv/browser/* docs/
