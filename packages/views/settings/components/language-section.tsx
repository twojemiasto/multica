"use client";

import { Card, CardContent } from "@multica/ui/components/ui/card";
import { Label } from "@multica/ui/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@multica/ui/components/ui/select";
import { useLocale, locales, localeLabels } from "../../i18n";

export function LanguageSection() {
  const { locale, setLocale, t } = useLocale();

  return (
    <section className="space-y-4">
      <h2 className="text-sm font-semibold">{t.settings.language}</h2>
      <Card>
        <CardContent className="space-y-3">
          <p className="text-xs text-muted-foreground">
            {t.settings.languageDescription}
          </p>
          <div>
            <Label className="text-xs text-muted-foreground">
              {t.settings.language}
            </Label>
            <Select
              value={locale}
              onValueChange={(value) => setLocale(value as typeof locale)}
            >
              <SelectTrigger className="mt-1 w-64">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {locales.map((l) => (
                  <SelectItem key={l} value={l}>
                    {localeLabels[l]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
