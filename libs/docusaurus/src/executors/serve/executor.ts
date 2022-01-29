import { ExecutorContext, joinPathFragments } from '@nrwl/devkit';
import type { ServeExecutorSchema } from './schema';
import { start } from '@docusaurus/core/lib';

export default async function runExecutor(
  options: ServeExecutorSchema,
  context: ExecutorContext
) {
  console.log('Executor ran for Serve', options);

  if (!context.projectName) throw new Error(`missing project name`);

  const project = context.workspace.projects[context.projectName];

  const projectRoot = joinPathFragments(context.root, project.root);

  // https://github.com/ZachJW34/nx-plus/blob/master/libs/docusaurus/src/builders/dev-server/builder.ts

  await start(projectRoot, {
    port: options.port.toString(),
    // host: options.host,
    // hotOnly: options.hotOnly,
    // open: options.open,
  });

  await new Promise((resolve) => {
    // forever
  });

  return {
    success: true,
  };
}
