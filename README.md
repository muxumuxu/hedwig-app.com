# Static landing page with i18n

## Configure

Create your surge account and start deploying in your first domain.

Modify the `deploy.sh` script with correct surge domain.

## Setup

```
bundle install
bundle exec middleman
```

## Add collaborator to surge

```
bundle exec middleman
cd build
surge -a <email> -d [name]-landing-page.surge.sh -p .
```

## Deployment

```
chmod +x deploy.sh (only first time)
./deploy.sh
```
