# zustand-rx

This is a tool to subscribe to a Zustand store as an RxJS observable.

This is the workspace readme. For more info about `zustand-rx` please go to the
[package readme](./libs/zustand-rx/README.md).

# Commits

Run `pnpm cz` to help prepare a commit message.

# Releases

Use the following command to tag a new version.

```
nx run workspace:version --post-targets zustand-rx:deploy --release-as=premajor --preid=beta --dry-run
nx run workspace:version --post-targets zustand-rx:deploy --release-as=major --dry-run
nx run workspace:version --post-targets zustand-rx:deploy --release-as=prerelease --preid=beta --dry-run
```

- https://github.com/jscutlery/semver
- https://github.com/bikecoders/ngx-deploy-npm

# Other links

- https://github.com/pmndrs/zustand/discussions/285#discussioncomment-1608258
