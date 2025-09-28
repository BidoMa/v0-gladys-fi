"use client"

import type React from "react"
import { useEffect, useRef, useId } from "react"

interface HubspotFormProps {
  portalId: string
  formId: string
  region: string
  targetId?: string
}

// Global flag to track if HubSpot script is loaded
let hubspotScriptLoaded = false
let hubspotScriptLoading = false
const hubspotLoadPromise: Promise<void> | null = null

export function HubspotForm({ portalId, formId, region, targetId }: HubspotFormProps) {
  const generatedId = useId()
  const finalTargetId = targetId || `hubspot-form-${generatedId}`
  const formContainerRef = useRef<HTMLDivElement>(null)
  const formCreatedRef = useRef(false)

  useEffect(() => {
    const createForm = () => {
      if (window.hbspt && window.hbspt.forms && formContainerRef.current && !formCreatedRef.current) {
        try {
          window.hbspt.forms.create({
            portalId: portalId,
            formId: formId,
            region: region,
            target: `#${finalTargetId}`,
          })
          formCreatedRef.current = true
        } catch (error) {
          console.error("Error creating HubSpot form:", error)
        }
      }
    }

    const loadHubSpotScript = (): Promise<void> => {
      return new Promise((resolve, reject) => {
        // If already loaded, resolve immediately
        if (hubspotScriptLoaded && window.hbspt) {
          resolve()
          return
        }

        // If currently loading, wait for it
        if (hubspotScriptLoading) {
          const checkLoaded = () => {
            if (hubspotScriptLoaded && window.hbspt) {
              resolve()
            } else {
              setTimeout(checkLoaded, 100)
            }
          }
          checkLoaded()
          return
        }

        // Check if script already exists
        const existingScript = document.getElementById("hubspot-forms-embed-script")
        if (existingScript) {
          if (window.hbspt) {
            hubspotScriptLoaded = true
            resolve()
          } else {
            // Script exists but not loaded yet
            existingScript.addEventListener("load", () => {
              hubspotScriptLoaded = true
              resolve()
            })
            existingScript.addEventListener("error", reject)
          }
          return
        }

        // Load the script
        hubspotScriptLoading = true
        const script = document.createElement("script")
        script.id = "hubspot-forms-embed-script"
        script.charset = "utf-8"
        script.type = "text/javascript"
        script.src = "//js.hsforms.net/forms/embed/v2.js"

        script.onload = () => {
          hubspotScriptLoaded = true
          hubspotScriptLoading = false
          resolve()
        }

        script.onerror = () => {
          hubspotScriptLoading = false
          reject(new Error("Failed to load HubSpot script"))
        }

        document.head.appendChild(script)
      })
    }

    // Load script and create form
    loadHubSpotScript()
      .then(() => {
        // Add a small delay to ensure hbspt.forms is available
        setTimeout(createForm, 100)
      })
      .catch((error) => {
        console.error("Failed to load HubSpot script:", error)
      })

    // Cleanup function
    return () => {
      if (formContainerRef.current) {
        formContainerRef.current.innerHTML = ""
      }
      formCreatedRef.current = false
    }
  }, [portalId, formId, region, finalTargetId])

  return (
    <div
      ref={formContainerRef}
      id={finalTargetId}
      className="hubspot-form-container"
      style={
        {
          "--hs-form-field-margin": "8px 0",
          "--hs-form-input-padding": "8px 12px",
          "--hs-form-input-font-size": "14px",
        } as React.CSSProperties
      }
    />
  )
}

declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (options: {
          portalId: string
          formId: string
          region: string
          target: string | HTMLElement | null
        }) => void
      }
    }
  }
}
