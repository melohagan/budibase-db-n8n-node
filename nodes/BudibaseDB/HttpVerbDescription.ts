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
				name: 'Create table',
				value: 'createtable',
				action: 'Create a table',
				routing: {
					request: {
						method: 'POST',
						url: '/tables',
						body: {
							name: '={{$parameter["tableName"]}}',
							primaryDisplay: '={{$parameter["primaryDisplay"]}}',
							schema: `={{JSON.parse($parameter["tableSchema"])}}`
						}
					},
				},
			},
			{
				name: 'Update table',
				value: 'updatetable',
				action: 'Update a table',
				routing: {
					request: {
						method: 'PUT',
						url: '={{"/tables/" + $parameter["tableId"]}}',
						body: {
							name: '={{$parameter["tableName"]}}',
							primaryDisplay: '={{$parameter["primaryDisplay"]}}',
							schema: `={{JSON.parse($parameter["tableSchema"])}}`
						}
					},
				},
			},
			{
				name: 'Delete table',
				value: 'deletetable',
				action: 'Delete a table',
				routing: {
					request: {
						method: 'DELETE',
						url: '={{"/tables/" + $parameter["tableId"]}}',
					},
				},
			},
			{
				name: 'Get table',
				value: 'gettable',
				action: 'Retrieve a table',
				routing: {
					request: {
						method: 'GET',
						url: '={{"/tables/" + $parameter["tableId"]}}',
					},
				},
			},
			{
				name: 'Search tables',
				value: 'searchtable',
				action: 'Search for tables',
				routing: {
					request: {
						method: 'POST',
						url: '/tables/search',
						body: {
							name: '={{$parameter["tableNameStartsWith"]}}',
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
				name: 'Update row',
				value: 'updaterow',
				action: 'Update a row',
				routing: {
					request: {
						method: 'PUT',
						url: '={{"/tables/" + $parameter["tableId"] + "/rows/" + $parameter["rowId"]}}',
						body: `={{JSON.parse($parameter["payload"])}}`,
					},
				},
			},
			{
				name: 'Delete row',
				value: 'deleterow',
				action: 'Delete a row',
				routing: {
					request: {
						method: 'DELETE',
						url: '={{"/tables/" + $parameter["tableId"] + "/rows/" + $parameter["rowId"]}}',
					},
				},
			},
			{
				name: 'Get row',
				value: 'getrow',
				action: 'Retrieve a row',
				routing: {
					request: {
						method: 'GET',
						url: '={{"/tables/" + $parameter["tableId"] + "/rows/" + $parameter["rowId"]}}',
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
						body: `={{JSON.parse($parameter["querypayload"])}}`,
					},
				},
			},
		],
		default: 'createrow',
	},
];