<!-- markdownlint-disable -->
# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [v1.0.1] - 2020-08-07

### Added
- `pattern` for all `<input>`s

### Changed
- Add GitHub API and avatar to service worker cache
- Add other missing cache items
- All `<input>`s now do not capitalize by default, also changing suggestions via `<datalist>`s
- Prompt user to reload on updates

### Fixed
- Set `utm_source` and `utm_campaign` correctly [#2](https://github.com/shgysk8zer0/utm-generator-app/issues/2)
- Set correct `theme_color` in webapp manifest
- Correctly set `autocapitalize` attribute on `<input>`s
- Fix typo in notification body text

## [v1.0.0] - 2020-08-06

Inital Release
<!-- markdownlint-restore -->
