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
				name: 'budibaseApi',
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
						operation: ["createrow", "updaterow", "deleterow", "getrow", "searchrow", "updatetable", "deletetable", "gettable"]
					}
				}
			},
			{
				displayName: 'Row ID',
				name: 'rowId',
				default: '',
				type: 'string',
				displayOptions: {
					show: {
						operation: ["updaterow", "deleterow", "getrow"]
					}
				}
			},
			{
				displayName: 'App Name Starts With',
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
				displayName: 'Table Name Starts With',
				name: 'tableNameStartsWith',
				default: '',
				type: 'string',
				displayOptions: {
					show: {
						operation: ["searchtable"]
					}
				}
			},
			{
				displayName: 'Table Name',
				name: 'tableName',
				default: '',
				type: 'string',
				displayOptions: {
					show: {
						operation: ["createtable", "updatetable"]
					}
				}
			},
			{
				displayName: 'Primary Display',
				name: 'primaryDisplay',
				description: 'The name of the column which should be used in relationship tags when relating to this table',
				default: '',
				type: 'string',
				displayOptions: {
					show: {
						operation: ["createtable", "updatetable"]
					}
				}
			},
			{
				displayName: 'Table Schema',
				name: 'tableSchema',
				default: '{\n\t"name": "string",\n\t"count": "number"\n}',
				description: "The table schema JSON request body",
				type: 'json',
				displayOptions: {
					show: {
						operation: ["createtable", "updatetable"]
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
						operation: ["createrow", "updaterow"]
					}
				}
			},
			{
				displayName: 'Query Payload',
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
