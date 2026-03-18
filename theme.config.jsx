import { VioLogo } from './components/VioLogo'

export default {
  logo: (
    <span className="flex items-center gap-2">
      <VioLogo height={24} />
    </span>
  ),
  project: {
    link: 'https://github.com/vio-live/vio-docs'
  },
  docsRepositoryBase: 'https://github.com/vio-live/vio-docs',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Vio'
    }
  }
}
