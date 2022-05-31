import { CssBaseline, ThemeProvider } from '@mui/material'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { lightTheme, darkTheme } from '../themes';
import { UIProvider } from '../context/ui/UIProvider';
import { EntriesProvider } from '../context/entries/EntriesProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <EntriesProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </EntriesProvider>
    </UIProvider>
  )
}

export default MyApp
