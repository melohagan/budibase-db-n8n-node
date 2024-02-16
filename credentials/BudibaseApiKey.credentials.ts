import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class BudibaseApiKey implements ICredentialType {
	name = 'budibaseApiKey';
	displayName = 'Budibase DB Public API';
	documentationUrl = 'https://docs.budibase.com/docs/public-api#how-to-get-your-api-key';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
		{
			displayName: 'APP ID',
			name: 'appId',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: 'https://tenant.budibase.app/api/public/v1',
		},
	];

	// This allows the credential to be used by other parts of n8n
	// stating how this credential is injected as part of the request
	// An example is the Http Request node that can make generic calls
	// reusing this credential
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				"x-budibase-api-key": '={{$credentials.apiKey}}',
				"x-budibase-app-id": '={{$credentials.appId}}',
			},
		},
	};

	// The block below tells how this credential can be tested
	test: ICredentialTestRequest = {
		request: {
			method: 'POST',
			url: '/tables/search',
			baseURL: '={{$credentials?.domain}}',
		},
		rules: [{
			type: "responseCode",
			properties: {
				value: 200,
				message: "OK"
			}
		}]
	};
}
