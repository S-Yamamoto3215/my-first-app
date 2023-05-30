import { useNavigate, TitleBar } from "@shopify/app-bridge-react";
import {
  Card,
  EmptyState,
  Layout,
  Page,
} from "@shopify/polaris";

export default function HomePage() {
  const navigate = useNavigate();

  const emptyStateMarkup = (
    <Card sectioned>
      <EmptyState
        heading="Create a QR code"
        action={{
          content: "Create QR code",
          onAction: () => navigate("/qrcodes/new"),
        }}
        image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
      >
        <p>Allow customers to scan codes and buy products using their phones.</p>
      </EmptyState>
    </Card>
  );

  return (
    <Page>
      <TitleBar
        title="QR codes"
        primaryAction={{
          content: "Create QR code",
          onAction: () => navigate("/qrcodes/new"),
        }}
      />
      <Layout>
        <Layout.Section>
          {emptyStateMarkup}
        </Layout.Section>
      </Layout>
    </Page>
  );
}
