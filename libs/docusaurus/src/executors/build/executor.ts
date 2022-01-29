import { build } from '@docusaurus/core/lib';
import { ExecutorContext, joinPathFragments } from '@nrwl/devkit';
import type { BuildExecutorSchema } from './schema';

export default async function runExecutor(
  options: BuildExecutorSchema,
  context: ExecutorContext
) {
  console.log('Executor ran for Build', options, context);

  if (!context.projectName) throw new Error(`missing project name`);

  const project = context.workspace.projects[context.projectName];

  const projectRoot = joinPathFragments(context.root, project.root);

  const outputPath = joinPathFragments(context.root, options.outputPath);

  // https://github.com/ZachJW34/nx-plus/blob/master/libs/docusaurus/src/builders/browser/builder.ts

  console.log(projectRoot, outputPath);

  await build(projectRoot, {
    outDir: outputPath,
  });

  return {
    success: true,
  };
}
