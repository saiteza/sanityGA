import { Theams, themes } from 'context/Theams';
import { useState, useContext, useMemo } from 'react';

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(theme === themes.dark
      ? themes.light
      : themes.dark
    )
  }

  const themeAPI = useMemo(() => {
    return {
      theme,
      toggleTheme
    }
  }, [theme, toggleTheme])

  return (
    <Theams.Provider value={themeAPI}>
      {children}
    </Theams.Provider>
  )
}

export const useTheme = () => useContext(Theams);

export default ThemeProvider;