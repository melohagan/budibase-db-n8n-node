import { INodeProperties } from 'n8n-workflow';

// When the resource `httpVerb` is selected, this `operation` parameter will be shown.
export const httpVerbOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		options: [
			{
				name: 'Create row',
				value: 'create',
				action: 'Create a row',
				routing: {
					request: {
						method: 'POST',
						url: '={{"/tables/" + $parameter["tableId"] + "/rows"}}',
						body: `={{JSON.parse($parameter["payload"])}}`,
					},
				},
			},
			{
				name: 'Search rows',
				value: 'search',
				action: 'Search for rows',
				routing: {
					request: {
						method: 'POST',
						url: '={{"/tables/" + $parameter["tableId"] + "/rows/search"}}',
						body: `={{JSON.parse($parameter["payload"])}}`,
					},
				},
			},
		],
		default: 'create',
	},
];

const jsonOperation: INodeProperties[] = [
	{
		displayName: 'Payload',
		name: 'payload',
		default: '',
		description: "The JSON request body",
		type: 'json',
	},
];

export const httpVerbFields: INodeProperties[] = [
	...jsonOperation,
];