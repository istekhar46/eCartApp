import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 30 },
  header: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  table: { width: '100%', border: '1px solid #ddd', marginTop: 10 },
  tableRow: { flexDirection: 'row', borderBottom: '1px solid #ddd' },
  tableCell: { padding: 8, flexGrow: 1, textAlign: 'center' },
  productCell: { flexGrow: 2 },
  totalCell: { flexGrow: 2, textAlign: 'right' },
  grandTotal: { fontSize: 18, marginTop: 20, textAlign: 'right' },
});

const InvoicePdf = ({ cart, total }) => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.header}>INVOICE GENERATOR</Text>
      <View style={styles.table}>
        <View style={[styles.tableRow, { backgroundColor: '#f2f2f2' }]}>
          <Text style={[styles.tableCell, styles.productCell]}>Product</Text>
          <Text style={styles.tableCell}>Qty</Text>
          <Text style={styles.tableCell}>Rate</Text>
          <Text style={[styles.tableCell, styles.totalCell]}>Total</Text>
        </View>
        {cart.map((product) => (
          <View key={product.id} style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.productCell]}>{product.title}</Text>
            <Text style={styles.tableCell}>{product.qty}</Text>
            <Text style={styles.tableCell}>${product.price}</Text>
            <Text style={[styles.tableCell, styles.totalCell]}>${product.qty * product.price}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.grandTotal}>Grand Total: ${total}</Text>
    </Page>
  </Document>
);

export default InvoicePdf;
