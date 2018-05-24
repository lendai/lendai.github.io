
    import React, { Component } from 'react'
    import { Route } from 'react-router-dom'
    import universal, { setHasBabelPlugin } from 'react-universal-component'

    setHasBabelPlugin()

    const universalOptions = {
      loading: () => null,
      error: () => null,
    }

    const t_0 = universal(import('../src/containers/Home'), universalOptions)
const t_1 = universal(import('../src/containers/Post'), universalOptions)
const t_2 = universal(import('../src/containers/Blog'), universalOptions)
const t_3 = universal(import('../src/containers/404'), universalOptions)

    // Template Map
    const templateMap = {
      t_0,
t_1,
t_2,
t_3
    }

    // Template Tree
    const templateTree = {c:{"404":{t:"t_3"},"/":{t:"t_0"},"blog":{c:{"post":{c:{1:{t:"t_1"},2:{t:"t_1"},3:{t:"t_1"},4:{t:"t_1"},5:{t:"t_1"},6:{t:"t_1"},7:{t:"t_1"},8:{t:"t_1"},9:{t:"t_1"},"10":{t:"t_1"},"11":{t:"t_1"},"12":{t:"t_1"},"13":{t:"t_1"},"14":{t:"t_1"},"15":{t:"t_1"},"16":{t:"t_1"},"17":{t:"t_1"},"18":{t:"t_1"},"19":{t:"t_1"},"20":{t:"t_1"},"21":{t:"t_1"},"22":{t:"t_1"},"23":{t:"t_1"},"24":{t:"t_1"},"25":{t:"t_1"},"26":{t:"t_1"},"27":{t:"t_1"},"28":{t:"t_1"},"29":{t:"t_1"},"30":{t:"t_1"},"31":{t:"t_1"},"32":{t:"t_1"},"33":{t:"t_1"},"34":{t:"t_1"},"35":{t:"t_1"},"36":{t:"t_1"},"37":{t:"t_1"},"38":{t:"t_1"},"39":{t:"t_1"},"40":{t:"t_1"},"41":{t:"t_1"},"42":{t:"t_1"},"43":{t:"t_1"},"44":{t:"t_1"},"45":{t:"t_1"},"46":{t:"t_1"},"47":{t:"t_1"},"48":{t:"t_1"},"49":{t:"t_1"},"50":{t:"t_1"},"51":{t:"t_1"},"52":{t:"t_1"},"53":{t:"t_1"},"54":{t:"t_1"},"55":{t:"t_1"},"56":{t:"t_1"},"57":{t:"t_1"},"58":{t:"t_1"},"59":{t:"t_1"},"60":{t:"t_1"},"61":{t:"t_1"},"62":{t:"t_1"},"63":{t:"t_1"},"64":{t:"t_1"},"65":{t:"t_1"},"66":{t:"t_1"},"67":{t:"t_1"},"68":{t:"t_1"},"69":{t:"t_1"},"70":{t:"t_1"},"71":{t:"t_1"},"72":{t:"t_1"},"73":{t:"t_1"},"74":{t:"t_1"},"75":{t:"t_1"},"76":{t:"t_1"},"77":{t:"t_1"},"78":{t:"t_1"},"79":{t:"t_1"},"80":{t:"t_1"},"81":{t:"t_1"},"82":{t:"t_1"},"83":{t:"t_1"},"84":{t:"t_1"},"85":{t:"t_1"},"86":{t:"t_1"},"87":{t:"t_1"},"88":{t:"t_1"},"89":{t:"t_1"},"90":{t:"t_1"},"91":{t:"t_1"},"92":{t:"t_1"},"93":{t:"t_1"},"94":{t:"t_1"},"95":{t:"t_1"},"96":{t:"t_1"},"97":{t:"t_1"},"98":{t:"t_1"},"99":{t:"t_1"},"100":{t:"t_1"}}}},t:"t_2"}}}

    // Get template for given path
    const getComponentForPath = path => {
      const parts = path === '/' ? ['/'] : path.split('/').filter(d => d)
      let cursor = templateTree
      try {
        parts.forEach(part => {
          cursor = cursor.c[part]
        })
        return templateMap[cursor.t]
      } catch (e) {
        return false
      }
    }

    if (typeof document !== 'undefined') {
      window.reactStaticGetComponentForPath = getComponentForPath
    }

    export default class Routes extends Component {
      render () {
        const { component: Comp, render, children } = this.props
        const renderProps = {
          templateMap,
          templateTree,
          getComponentForPath
        }
        if (Comp) {
          return (
            <Comp
              {...renderProps}
            />
          )
        }
        if (render || children) {
          return (render || children)(renderProps)
        }

        // This is the default auto-routing renderer
        return (
          <Route path='*' render={props => {
            let Comp = getComponentForPath(props.location.pathname)
            if (!Comp) {
              Comp = getComponentForPath('404')
            }
            return Comp && <Comp {...props} />
          }} />
        )
      }
    }
    