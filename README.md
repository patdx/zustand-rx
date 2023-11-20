# zustand-rx

This is a tool to subscribe to a Zustand store as an RxJS observable.

This is the workspace readme. For more info about `zustand-rx` please see:

- [package readme](./libs/zustand-rx/README.md).
- [zustand-rx changelog](https://github.com/patdx/zustand-rx/blob/main/libs/zustand-rx/CHANGELOG.md)

# Commits

Run `pnpm cz` to help prepare a commit message.

# Releases

Use the following command to tag a new version.

```
nx run workspace:version --release-as=premajor --preid=beta --dry-run
nx run workspace:version --release-as=major --dry-run
nx run workspace:version --release-as=prerelease --preid=beta --dry-run
```

- https://github.com/jscutlery/semver
- https://github.com/bikecoders/ngx-deploy-npm

# Other links

- https://github.com/pmndrs/zustand/discussions/285#discussioncomment-1608258
