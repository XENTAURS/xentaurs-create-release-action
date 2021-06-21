import * as core from '@actions/core'
import {getBooleanInput} from './get-boolean-input'

export interface InputParameters {
  apiKey: string
  cancelOnTimeout: boolean
  channel: string
  configFile: string
  debug: boolean
  defaultPackageVersion: boolean
  deployAt: string
  deployTo: string
  deploymentCheckSleepCycle: string
  deploymentTimeout: string
  excludeMachines: string
  force: boolean
  forcePackageDownload: boolean
  guidedFailure: string
  ignoreChannelRules: boolean
  ignoreExisting: boolean
  ignoreSslErrors: boolean
  logLevel: string
  noDeployAfter: string
  noRawLog: boolean
  package: string
  packagePrerelease: string
  packageVersion: string
  packagesFolder: string
  password: string
  progress: boolean
  project: string
  proxy: string
  proxyPassword: string
  proxyUsername: string
  rawLogFile: string
  releaseNotes: string
  releaseNotesFile: string
  releaseNumber: string
  server: string
  skip: string
  space: string
  specificMachines: string
  tenant: string
  tenantTag: string
  timeout: string
  username: string
  variable: string
  waitForDeployment: boolean
  whatIf: boolean
}

export function get(): InputParameters {
  return {
    apiKey: core.getInput('api_key'),
    cancelOnTimeout: getBooleanInput('cancel_on_timeout'),
    channel: core.getInput('channel'),
    configFile: core.getInput('config_file'),
    debug: getBooleanInput('debug'),
    defaultPackageVersion: getBooleanInput('default_package_version'),
    deployAt: core.getInput('deploy_at'),
    deployTo: core.getInput('deploy_to'),
    deploymentCheckSleepCycle: core.getInput('deployment_check_sleep_cycle'),
    deploymentTimeout: core.getInput('deployment_timeout'),
    excludeMachines: core.getInput('exclude_machines'),
    force: getBooleanInput('force'),
    forcePackageDownload: getBooleanInput('force_package_download'),
    guidedFailure: core.getInput('guided_failure'),
    ignoreChannelRules: getBooleanInput('ignore_channel_rules'),
    ignoreExisting: getBooleanInput('ignore_existing'),
    ignoreSslErrors: getBooleanInput('ignore_ssl_errors'),
    logLevel: core.getInput('log_level'),
    noDeployAfter: core.getInput('no_deploy_after'),
    noRawLog: getBooleanInput('no_raw_log'),
    package: core.getInput('package'),
    packagePrerelease: core.getInput('package_prerelease'),
    packageVersion: core.getInput('package_version'),
    packagesFolder: core.getInput('packages_folder'),
    password: core.getInput('password'),
    progress: getBooleanInput('progress'),
    project: core.getInput('project'),
    proxy: core.getInput('proxy'),
    proxyPassword: core.getInput('proxy_password'),
    proxyUsername: core.getInput('proxy_username'),
    rawLogFile: core.getInput('raw_log_file'),
    releaseNotes: core.getInput('release_notes'),
    releaseNotesFile: core.getInput('release_notes_file'),
    releaseNumber: core.getInput('release_number'),
    server: core.getInput('server'),
    skip: core.getInput('skip'),
    space: core.getInput('space'),
    specificMachines: core.getInput('specific_machines'),
    tenant: core.getInput('tenant'),
    tenantTag: core.getInput('tenant_tag'),
    timeout: core.getInput('timeout'),
    username: core.getInput('user'),
    variable: core.getInput('variable'),
    waitForDeployment: getBooleanInput('wait_for_deployment'),
    whatIf: getBooleanInput('what_if')
  }
}