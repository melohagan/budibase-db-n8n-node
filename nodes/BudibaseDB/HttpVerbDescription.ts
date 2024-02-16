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
				name: 'Get application',
				value: 'getapp',
				action: 'Retrieve an application',
				routing: {
					request: {
						method: 'GET',
						url: '={{"/applications/" + $parameter["appId"]}}',
					},
				},
			},
			{
				name: 'Unpublish application',
				value: 'unpublish',
				action: 'Unpublish an application',
				routing: {
					request: {
						method: 'POST',
						url: '={{"/applications/" + $parameter["appId"] + "/unpublish"}}',
					},
				},
			},
			{
				name: 'Search applications',
				value: 'searchapp',
				action: 'Search for application',
				routing: {
					request: {
						method: 'POST',
						url: '/applications/search',
						body: {
							name: '={{$parameter["appName"]}}'
						}
					},
				},
			},
			{
				name: 'Create row',
				value: 'createrow',
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
				value: 'searchrow',
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