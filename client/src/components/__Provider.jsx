import React from 'react';
import {
  SpotifyAPIProvider,
  StyleProvider,
  SpotifyProvider,
  ColorProvider,
  SearchProvider,
} from './';


export default function __Provider({ children }) {
  return (
    <StyleProvider>
      <SpotifyAPIProvider>
        <SpotifyProvider>
          <ColorProvider>
            <SearchProvider>
              {children}
            </SearchProvider>
          </ColorProvider>
        </SpotifyProvider>
      </SpotifyAPIProvider>
    </StyleProvider>
  );
}

