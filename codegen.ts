import type {CodegenConfig} from '@graphql-codegen/cli'

const config: CodegenConfig = {
  // schema: 'http://127.0.0.1:8000/graphql',
  schema: [
    {
      'http://127.0.0.1:8000/graphql': {
        headers: {
          Authorization: 'JWT eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJwa2s5NEJOU19oUWs1SjBsc2RGU3NySEVZWGdxd3RDZFhCalo2X2w4Zi1JIn0.eyJleHAiOjE3MTU3NzU3NDEsImlhdCI6MTcxNTc2MTM0MSwianRpIjoiMmJhMTA2YzMtZDY0MC00YWEzLThhYTMtNWNmY2UxOWMxMWQzIiwiaXNzIjoiaHR0cDovLzE5Mi4xNjguMS4yMjI6MTgwODAvYXV0aC9yZWFsbXMvbWFzdGVyIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjlhZTQwYjZhLTUxZDYtNDNkOC1hZDkzLTM3ZjFjNDU4ODg5OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImZ0QXBwcyIsInNlc3Npb25fc3RhdGUiOiIzNjQ1MGU2ZC1iMWY2LTRmNmEtODU5Yy1jYjBiMGI2YWVmNmQiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMtbWFzdGVyIiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIGVtYWlsIHByb2ZpbGUiLCJzaWQiOiIzNjQ1MGU2ZC1iMWY2LTRmNmEtODU5Yy1jYjBiMGI2YWVmNmQiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6InJvb3Qgcm9vdCIsInByZWZlcnJlZF91c2VybmFtZSI6InJvb3QiLCJnaXZlbl9uYW1lIjoicm9vdCIsImZhbWlseV9uYW1lIjoicm9vdCJ9.WFS0gOXgdOwn6y7pIVfMLmCanSHJSLcdyG35xqOls-614xCd3eCT0hUcYQ2lJ3Lv3UJGJVrunz3qEJm9sBAaPjIzEftcotrVmWjF52sr02Tih6bJ4qZP5pbqJAsSFZ79p3QAn-EpSMcHgHE_nhG4eJS4PP7_e9ZRXPoQyEJaphtTpKaCya_vMNddecUL4VasPEH-al6BbLKDmeVIkxbwZPYnNgrwVZbezmDpoulsVXXOnwOYDS--qUrOb7cA6MleuxJKb6uneV3CihKpM_EWBA0wzb5cFggUm6AqZ2gK3qr2LbxL_ycXgs0N5Vh0_SxQ3H9i086N1JX50z33LQiLCQ',

        },
      },
    },
  ],
  documents: './src/**/*.graphql',
  generates: {
    'src/types.ts': {plugins: ['typescript']},
    'src/': {
      preset: 'near-operation-file',
      presetConfig: {extension: '.generated.ts', baseTypesPath: 'types.ts'},
      plugins: ['typescript-operations', 'typescript-apollo-angular'],
      config: {withHooks: true}

    }
  }

}
export default config

