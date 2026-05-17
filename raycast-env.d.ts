/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** MCP Server Port - Port where Spokenly's MCP server listens (default 51089) */
  "mcpPort": string,
  /** Toggle Dictation Fallback - Use System Events to replay your Spokenly dictation shortcut. Required if the URL scheme cannot stop an in-progress dictation. Needs Accessibility permission for Raycast. */
  "useShortcutFallback": boolean
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `toggle-dictation` command */
  export type ToggleDictation = ExtensionPreferences & {}
  /** Preferences accessible in the `copy-last-transcript` command */
  export type CopyLastTranscript = ExtensionPreferences & {}
  /** Preferences accessible in the `paste-last-transcript` command */
  export type PasteLastTranscript = ExtensionPreferences & {}
  /** Preferences accessible in the `search-transcripts` command */
  export type SearchTranscripts = ExtensionPreferences & {}
  /** Preferences accessible in the `transcribe-file` command */
  export type TranscribeFile = ExtensionPreferences & {}
  /** Preferences accessible in the `open-history-folder` command */
  export type OpenHistoryFolder = ExtensionPreferences & {}
  /** Preferences accessible in the `open-last-recording` command */
  export type OpenLastRecording = ExtensionPreferences & {}
  /** Preferences accessible in the `select-model` command */
  export type SelectModel = ExtensionPreferences & {}
  /** Preferences accessible in the `select-file-model` command */
  export type SelectFileModel = ExtensionPreferences & {}
  /** Preferences accessible in the `run-quick-command` command */
  export type RunQuickCommand = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `toggle-dictation` command */
  export type ToggleDictation = {}
  /** Arguments passed to the `copy-last-transcript` command */
  export type CopyLastTranscript = {}
  /** Arguments passed to the `paste-last-transcript` command */
  export type PasteLastTranscript = {}
  /** Arguments passed to the `search-transcripts` command */
  export type SearchTranscripts = {}
  /** Arguments passed to the `transcribe-file` command */
  export type TranscribeFile = {}
  /** Arguments passed to the `open-history-folder` command */
  export type OpenHistoryFolder = {}
  /** Arguments passed to the `open-last-recording` command */
  export type OpenLastRecording = {}
  /** Arguments passed to the `select-model` command */
  export type SelectModel = {}
  /** Arguments passed to the `select-file-model` command */
  export type SelectFileModel = {}
  /** Arguments passed to the `run-quick-command` command */
  export type RunQuickCommand = {}
}

