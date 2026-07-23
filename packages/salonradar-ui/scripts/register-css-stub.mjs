import { registerHooks } from 'node:module';
import { load, resolve } from './css-stub-loader.mjs';

registerHooks({ load, resolve });
