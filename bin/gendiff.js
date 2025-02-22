#!/usr/bin/env node
import { Command } from 'commander';
const program = new Command();
import gendiff from '../src/index.js'

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f, --format [type]', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2) => {
    const difference = gendiff(filepath1, filepath2)
  });

program.parse();