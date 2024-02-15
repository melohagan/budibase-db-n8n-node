import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { httpVerbFields, httpVerbOperations } from './HttpVerbDescription';

export class BudibaseDB implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Budibase DB',
		name: 'budibaseDB',
		icon: 'file:budibase.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"]',
		description: 'Interact with Budibase DB Public API',
		defaults: {
			name: 'BudibaseDB',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'budibaseApiKey',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{$credentials?.domain}}',
			url: '',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Table ID',
				name: 'tableId',
				default: '',
				type: 'string',
			},
			...httpVerbOperations,
			...httpVerbFields,
		],
	};
}
