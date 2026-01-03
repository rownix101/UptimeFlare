import '@mantine/core/styles.css'
import type { AppProps } from 'next/app'
import { MantineColorsTuple, MantineProvider } from '@mantine/core'
import NoSsr from '@/components/NoSsr'
import '@/util/i18n'
import '@/styles/globals.css'
import { geistSans, geistMono } from '@/util/fonts'

const brand: MantineColorsTuple = [
  '#eef4ff',
  '#dbe6ff',
  '#b7ccff',
  '#8bb0ff',
  '#5b90ff',
  '#2563eb',
  '#1f56d1',
  '#1a49b5',
  '#153d97',
  '#0f2f75',
]

const theme = {
  fontFamily: `${geistSans.style.fontFamily}, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,
  fontFamilyMonospace: `${geistMono.style.fontFamily}, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
  primaryColor: 'brand',
  colors: {
    brand,
  },
  headings: {
    fontFamily: `${geistSans.style.fontFamily}, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,
  },
  black: '#0a0a0a',
  white: '#ffffff',
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NoSsr>
      <MantineProvider defaultColorScheme="auto" theme={theme}>
        <Component {...pageProps} />
      </MantineProvider>
    </NoSsr>
  )
}
