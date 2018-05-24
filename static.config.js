/* eslint-disable react/no-danger */
import React, { Component } from 'react'
import { renderStaticOptimized } from 'glamor/server'

export default {
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/containers/home',
    },
    {
      is404: true,
      component: 'src/containers/404',
    },
  ],
  renderToHtml: async (render, Comp, meta) => {
    const html = render(<Comp />)
    const { css } = renderStaticOptimized(() => html)
    meta.glamStyles = css
    return html
  },
  Document: class CustomDocument extends Component {
    render () {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <style dangerouslySetInnerHTML={{ __html: renderMeta.glamStyles }} />
            <link rel="icon" type="image/png" href="/favicon.png" />
            <title>Daniel Mauno Pettersson</title>
          </Head>
          <Body>
            {children}
          </Body>
        </Html>
      )
    }
  },
}
