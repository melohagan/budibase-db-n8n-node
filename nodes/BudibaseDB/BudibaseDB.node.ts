import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { httpVerbOperations } from './HttpVerbDescription';

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
			name: 'Budibase DB',
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
			...httpVerbOperations,
			{
				displayName: 'App ID',
				name: 'appId',
				default: '',
				type: 'string',
				displayOptions: {
					show: {
						operation: ["getapp", "unpublish"]
					}
				}
			},
			{
				displayName: 'Table ID',
				name: 'tableId',
				default: '',
				type: 'string',
				displayOptions: {
					show: {
						operation: ["createrow", "searchrow"]
					}
				}
			},
			{
				displayName: 'App name starts with',
				name: 'appName',
				default: '',
				type: 'string',
				displayOptions: {
					show: {
						operation: ["searchapp"]
					}
				}
			},
			{
				displayName: 'Payload',
				name: 'payload',
				default: '{\n\t\n}',
				description: "The JSON request body",
				type: 'json',
				displayOptions: {
					show: {
						operation: ["createrow"]
					}
				}
			},
			{
				displayName: 'Query payload',
				name: 'querypayload',
				default: `{\n\t"query": {\n\t\t"string": {\n\t\t\t\t\t\n\t\t}\n\t}\n}`,
				description: "The JSON request body",
				type: 'json',
				displayOptions: {
					show: {
						operation: ["searchrow"]
					}
				}
			},
		],
	};
}
