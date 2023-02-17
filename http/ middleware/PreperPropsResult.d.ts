export type PreperPropsResult = {
	type: 'Basic' | 'Bearer' | 'ApiKey' | 'OAuth2' | null,
	credentials: string
}
