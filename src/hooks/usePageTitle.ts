import { useEffect } from "react";

const SITE_NAME = "Gabriel Arcasa";

/**
 * Atualiza o título da aba por rota. Títulos que já contêm o nome do site são usados como estão.
 */
export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title.includes(SITE_NAME) ? title : `${title} · ${SITE_NAME}`;
  }, [title]);
}
