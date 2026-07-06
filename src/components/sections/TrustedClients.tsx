"use client";

import { clients } from "@/data/site-data";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/motion/MotionWrappers";

function ClientLogoItem({ client }: { client: (typeof clients)[0] }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col items-center justify-center px-3 py-2">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-white">
        <span className="text-xs font-bold text-navy">{client.abbr.slice(0, 4)}</span>
      </div>
      <span className="mt-2 text-center text-xs font-bold text-navy">
        {client.abbr}
      </span>
      {client.subtext && (
        <span className="mt-0.5 max-w-[110px] text-center text-[10px] leading-tight text-muted">
          {client.subtext}
        </span>
      )}
    </div>
  );
}

export function TrustedClients() {
  return (
    <section id="clients" className="pb-section">
      <Container>
        <FadeUp>
          <div className="overflow-hidden rounded-card border border-border bg-white px-6 py-10 shadow-card sm:px-10">
            <h2 className="mb-10 text-center text-sm font-bold uppercase tracking-wider text-navy sm:text-base">
              Trusted by Government & Leading Institutions
            </h2>

            <div className="grid grid-cols-3 gap-y-8 sm:grid-cols-5 lg:grid-cols-9">
              {clients.map((client) => (
                <ClientLogoItem key={client.id} client={client} />
              ))}
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
