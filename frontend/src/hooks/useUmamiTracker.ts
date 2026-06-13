import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Umami event tracking interface.
 * Uses the global `umami` object injected by the tracking script.
 */
declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, string | number | boolean>) => void;
    };
  }
}

/**
 * Custom hook for sending Umami tracking events.
 * 
 * Usage:
 * ```tsx
 * const { trackEvent, trackPageSection } = useUmamiTracker();
 * 
 * trackEvent('cta_click', { button: 'hero_cta', page: '/products' });
 * trackPageSection('hero');
 * ```
 */
export function useUmamiTracker() {
  const location = useLocation();

  /** Track a custom event */
  const trackEvent = useCallback(
    (eventName: string, eventData?: Record<string, string | number | boolean>) => {
      if (window.umami) {
        window.umami.track(eventName, {
          ...eventData,
          page: location.pathname,
        });
      }
    },
    [location.pathname]
  );

  /** Track when a user views a specific section */
  const trackPageSection = useCallback(
    (section: string) => {
      trackEvent('section_view', { section });
    },
    [trackEvent]
  );

  /** Track a CTA button click */
  const trackCTA = useCallback(
    (ctaName: string, destination?: string) => {
      trackEvent('cta_click', {
        cta: ctaName,
        ...(destination && { destination }),
      });
    },
    [trackEvent]
  );

  /** Track form submissions */
  const trackFormSubmit = useCallback(
    (formName: string, success: boolean) => {
      trackEvent('form_submit', {
        form: formName,
        success,
      });
    },
    [trackEvent]
  );

  /** Track outbound link clicks */
  const trackOutbound = useCallback(
    (url: string, label?: string) => {
      trackEvent('outbound_link', {
        url,
        ...(label && { label }),
      });
    },
    [trackEvent]
  );

  /** Track product views */
  const trackProductView = useCallback(
    (productName: string, category?: string) => {
      trackEvent('product_view', {
        product: productName,
        ...(category && { category }),
      });
    },
    [trackEvent]
  );

  /** Track gallery interactions */
  const trackGalleryView = useCallback(
    (imageId: string, action: 'open' | 'close' | 'navigate') => {
      trackEvent('gallery_interaction', {
        image: imageId,
        action,
      });
    },
    [trackEvent]
  );

  return {
    trackEvent,
    trackPageSection,
    trackCTA,
    trackFormSubmit,
    trackOutbound,
    trackProductView,
    trackGalleryView,
  };
}
