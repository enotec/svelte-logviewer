/**
 * @license lucide-svelte v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
import type { SVGAttributes, SvelteHTMLElements } from 'svelte/elements';
export type Attrs = SVGAttributes<SVGSVGElement>;
export type IconNode = [elementName: keyof SvelteHTMLElements, attrs: Attrs][];
export interface IconProps extends Attrs {
	name?: string;
	color?: string;
	size?: number | string;
	strokeWidth?: number | string;
	absoluteStrokeWidth?: boolean;
	class?: string;
	iconNode?: IconNode;
}
export type IconEvents = {
	[evt: string]: CustomEvent<unknown>;
};
export type IconSlots = {
	default: unknown;
};
